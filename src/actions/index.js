
export const MATCH_SELECTED = 'MATCH_SELECTED'

export function selectMatch(match) {
  return{
    type: MATCH_SELECTED,
    payload: match
  };
}
