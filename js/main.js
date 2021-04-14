import TwillioVideo from 'twilio-video'

document.getElementById("connect").onclick = (() => {
  const startAt = new Date()
  console.debug(startAt.toISOString())
  const accessToken = "YOUR_ACCESS_TOKEN"
  TwillioVideo.connect(accessToken).then(room => {
    const connectedAt = new Date()
    console.debug(connectedAt,  connectedAt - startAt)
    console.log(`Successfully joined a Room: ${room}`);
    window.room = room
    room.on('participantConnected', participant => {
      console.log(`A remote Participant connected: ${participant}`);
    });
  }, error => {
    console.error(`Unable to connect to Room: ${error.message}`);
  });
})

document.getElementById("disconnect").onclick = (() => {
  if (room) {
    room.disconnect()
    console.debug('disconnected')
  }
})
