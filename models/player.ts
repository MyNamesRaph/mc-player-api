export default interface Player {
    // deno-lint-ignore ban-types
    [key:string]: {},
    name : string,
    textures : Record<string, unknown>,
    nbt : Record<string, unknown>,
    updated : Date
}