class ComponentDelegate {
    constructor(private data: any = {}) {
    }

    // TODO: notifyParent

    setData(data: any) {
        this.data = data;
    }

    getData(): any {
        return this.data;
    }

    getProps(): any {
        return {}; // TODO
    }
}

export { ComponentDelegate }
