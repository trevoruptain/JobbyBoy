export default function profileSelector(state, key) {
    return state.entities.profile ? state.entities.profile : { [key]: undefined };
}