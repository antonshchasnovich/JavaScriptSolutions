var CHAT_WIDTH = 400;
var CHAT_HEIGHT = 600;


function createChat() {
    var chat = new Chat();
}

function Chat() {
    var chatWindowProps = 'left=' + (window.screenX + window.innerWidth - CHAT_WIDTH) + ',top=' + (window.screenY + window.innerHeight - CHAT_HEIGHT) + ',width=' + CHAT_WIDTH + ',height=' + CHAT_HEIGHT;

    this.win = window.open('about:blank', 'Chat', chatWindowProps);

    var generalContainer = this.win.document.createElement('div');
    this.win.document.body.appendChild(generalContainer);

    this.chatBox = this.win.document.createElement('div');
    generalContainer.appendChild(this.chatBox);
    this.startBox = this.win.document.createElement('div');
    generalContainer.appendChild(this.startBox);

    this.messagesBox = this.win.document.createElement('div');
    this.chatBox.appendChild(this.messagesBox);

    this.messagesBox.style.width = CHAT_WIDTH - 40;
    this.messagesBox.style.maxWidth = CHAT_WIDTH - 40;
    this.messagesBox.style.height = CHAT_HEIGHT * 0.65;
    this.messagesBox.style.border = 'solid 1px black';
    this.messagesBox.style.overflowY = 'scroll';
    this.messagesBox.style.margin = 5;
    this.messagesBox.style.padding = 5;
    
    var elemsTable = this.win.document.createElement('table');
    this.chatBox.appendChild(elemsTable);
    var elemsTr = this.win.document.createElement('tr');
    elemsTable.appendChild(elemsTr);
    var msgTextAreaContainer = this.win.document.createElement('td');
    elemsTr.appendChild(msgTextAreaContainer);
    var sendMsgButtonContainer = this.win.document.createElement('td');
    elemsTr.appendChild(sendMsgButtonContainer);
    
    this.msgTextArea = this.win.document.createElement('textArea');
    this.msgTextArea.style.height = CHAT_HEIGHT * 0.27;
    this.msgTextArea.style.width = CHAT_WIDTH * 0.73;
    this.msgTextArea.style.padding = 5;
    msgTextAreaContainer.appendChild(this.msgTextArea);
    
    this.sendMsgButton = this.win.document.createElement('button');
    this.sendMsgButton.style.height = CHAT_HEIGHT * 0.27;
    this.sendMsgButton.style.width = CHAT_WIDTH * 0.18;
    this.sendMsgButton.style.margin = 5;
    this.sendMsgButton.innerText = 'Send';
    this.sendMsgButton.addEventListener('click', this.sendMessage, false);
    sendMsgButtonContainer.appendChild(this.sendMsgButton); 
}

Chat.prototype.sendMessage = function(){
    //заглушка
    console.log('Message sended');
}
