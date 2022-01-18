import request from '@/utils/request'

export function getPokemonInfo(query) {
    console.log(query)
    return request({
        url: `pokemon/${query}`,
        method: 'get',
    })
}
export function getPokemonList() {
    return request({
        url: `pokemon?limit=1118`,
        method: 'get',
    })
}