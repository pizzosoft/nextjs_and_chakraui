import { selector } from "recoil"
import { menuSelecionadoAtom } from './atom'
const menuSelecionado = selector({
    key: 'menuAtivo',
    get: ({ get }) => get(menuSelecionadoAtom),
});


export default menuSelecionado