import { register, ValueChangedEvent } from 'wire-service';

export const getWireService = Symbol("getWireService");

register(getWireService, (eventTarget) => {
    const state = {
        connected: false,
        config: undefined
    };
    const loadData = () => {
        setTimeout(() => {
            if (!state.connected) return;

            eventTarget.dispatchEvent(new ValueChangedEvent({
                "id": state.config.id,
                "name": `name-${state.config.id}`
            }))
        }, state.config.delay || Math.random() * 1000);
    }

    eventTarget.addEventListener("config", (newConfig) => {
        state.config = newConfig;
    })

    eventTarget.addEventListener("connect", () => {
        state.connected = true;
        loadData();
    })

    eventTarget.addEventListener("disconnect", () => {
        state.connected = false;
    })
})
