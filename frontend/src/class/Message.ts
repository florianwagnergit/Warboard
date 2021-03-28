export class Message {
    from: string;
    time: string;
    msg: string;

    constructor(from, msg) {
        this.from = from;
        this.time = new Date().getHours().toString() + ':' + new Date().getMinutes().toString() + ':' + new Date().getSeconds().toString();
        this.msg = msg;
    }

    setFrom(from) {
        this.from = from;
    }

    setTime() {
        this.time = new Date().getHours().toString() + ':' + new Date().getMinutes().toString() + ':' + new Date().getSeconds().toString();
    }

    setMsg(msg) {
        this.msg = msg;
    }

    getFrom() {
        return this.from;
    }

    getTime() {
        return this.time;
    }

    getMsg() {
        return this.msg;
    }
}
