export const saveGameToStorahe = ({board, turn}) =>{
        window.localStorage.setItem('board', JSON.stringify(board));
        window.localStorage.setItem('turn', turn);
}

export const removeFromStorage = () =>{
  window.localStorage.removeItem('board');
  window.localStorage.removeItem('turn');
}