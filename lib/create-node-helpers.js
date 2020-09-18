"use strict";
// Typescript port of create-node-helpers
// https://github.com/angeloashmore/gatsby-node-helpers/blob/604f1504bfa8c714b488f706edfe3154c4426fba/src/index.js#L1
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const fp_1 = require("lodash/fp");
const json_stringify_safe_1 = __importDefault(require("json-stringify-safe"));
// Default parent ID for all nodes.
const DEFAULT_PARENT_ID = `__SOURCE__`;
// Node fields used internally by Gatsby.
const RESTRICTED_NODE_FIELDS = [
    `id`,
    `children`,
    `parent`,
    `fields`,
    `internal`,
];
// Generates an MD5 hash from a string.
const digest = (str) => crypto_1.createHash(`md5`).update(str).digest(`hex`);
// Generates an MD5 hash of an object and assign it to the internal.contentDigest key.
const withDigest = (obj) => fp_1.assoc([`internal`, `contentDigest`], digest(json_stringify_safe_1.default(obj)), obj);
// Returns node helpers for creating new nodes.
const createNodeHelpers = (options = {}) => {
    if (!fp_1.isPlainObject(options))
        throw new Error(`Options must be an object. An argument of type ${typeof options} was provided.`);
    if (typeof options.sourceId !== `undefined` &&
        typeof options.sourceId !== `string`)
        throw new Error(`options.sourceId must be a string. A value of type ${typeof options.sourceId} was provided.`);
    if (typeof options.typePrefix !== `string`)
        throw new Error(`options.typePrefix must be a string. A value of type ${typeof options.typePrefix} was provided.`);
    if (typeof options.conflictFieldPrefix !== `undefined` &&
        typeof options.conflictFieldPrefix !== `string`)
        throw new Error(`options.conflictFieldPrefix must be a string. A value of type ${typeof options.conflictFieldPrefix} was provided.`);
    const { sourceId = DEFAULT_PARENT_ID, typePrefix, conflictFieldPrefix = fp_1.lowerFirst(typePrefix), } = options;
    // Generates a node ID from a given type and node ID.
    const generateNodeId = (type, id) => `${typePrefix}__${fp_1.upperFirst(fp_1.camelCase(type))}__${id}`;
    // Generates a node type name from a given type.
    const generateTypeName = (type) => fp_1.upperFirst(fp_1.camelCase(`${typePrefix} ${type}`));
    // Prefixes conflicting node fields.
    const prefixConflictingKeys = (obj) => {
        Object.keys(obj).forEach((key) => {
            if (RESTRICTED_NODE_FIELDS.includes(key)) {
                obj[conflictFieldPrefix + fp_1.upperFirst(key)] = obj[key];
                delete obj[key];
            }
        });
        return obj;
    };
    // Creates a node factory with a given type and middleware processor.
    const createNodeFactory = (type, middleware = fp_1.identity) => async (obj, ...args) => {
        const clonedObj = fp_1.cloneDeep(obj);
        const safeObj = prefixConflictingKeys(clonedObj);
        let node = Object.assign(Object.assign({}, safeObj), { id: generateNodeId(type, obj.id), parent: sourceId, children: [], internal: {
                type: generateTypeName(type),
            } });
        let n = await middleware(node, ...args);
        return withDigest(n);
    };
    return {
        createNodeFactory,
        generateNodeId,
        generateTypeName,
    };
};
exports.default = createNodeHelpers;
//# sourceMappingURL=create-node-helpers.js.map