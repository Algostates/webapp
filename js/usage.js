
const config = {
    "iceServers": [

    ]
}

const rtcp = new RTCPeerConnection(config);
// rtcp.createOffer(sdp => {
//     rtcp.setLocalDescription(sdp);
//     thirdman.send(sdp)
// })

let q = _ => {
    return "hello from cbk";
}

function callOuter(cbk){
    return cbk(q);
}

let p  = cbk => {
    return cbk();
}

console.log('callOuter returned: ', callOuter(p))

const t = new Test('test1')

let mycbk = (sdp, a, b) => {
    console.log('finally!!!:', sdp, a, b);
}


t.print();
t.createOffer(mycbk)

fetch('https://algostates.github.io/webapp/index.html')
//.then(result => result.json())
.then(jres => console.log(jres))
.catch(err => console.log('error fetching:',err));
