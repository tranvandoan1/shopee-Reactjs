export const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split("/");
    return {
        resource1: request[1],
        resource2: request[2],
        id: request[3],
    };

};


export const $ = selector => {
    const elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : [...elements];
};
export const reRender = async(component, position = "") => {
    if (position) {
        $(position).innerHTML = await component.render();
    } else {
        $("#main-content").innerHTML = await component.render();

    }
    if (component.afterRender) {
        await component.afterRender()
    }
}