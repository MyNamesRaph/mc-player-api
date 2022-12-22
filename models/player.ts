export default interface Player {
    // deno-lint-ignore ban-types
    [key:string]: {},
    name : string,
    textures : string,
    nbt : Record<string,unknown>,
    updated : Date
}