### three stage of event flows
#### phase 1: capture phase 
the event is dispatched to the target's ancestors from the root of the tree to the direct parent of the target node.
#### phase 2
the event is dispatched to the target node.
#### phase 3: bubbling stage
the event is dispatched to the target's ancestors from the direct parent of the target node to the root of the tree.

<img src="https://www.w3.org/TR/2006/WD-DOM-Level-3-Events-20060413/images/eventflow.png" alt=""> 

#### add event listener to a dom element for specified event type
```javascript
var oDiv = document.getElementById('demo')
var hanlder = function (e) {
  console.log('event hanlder called')
  console.log(e)
}
// event type, handler, event listener invoked in capture phase
oDiv.addEventListener('mousedown', handler, true)
```
To register and event listener, DOM applicaitions use the methods EventTarget.addEventListener() and EventTarget.addEventListenerNS().


<br><br>

### Event Object Interface
```c
// Introduced in DOM Level 2:
interface Event {

  // PhaseType
  const unsigned short      CAPTURING_PHASE                = 1;
  const unsigned short      AT_TARGET                      = 2;
  const unsigned short      BUBBLING_PHASE                 = 3;

  readonly attribute DOMString       type;
  readonly attribute EventTarget     target;
  readonly attribute EventTarget     currentTarget;
  readonly attribute unsigned short  eventPhase;
  readonly attribute boolean         bubbles;
  readonly attribute boolean         cancelable;
  readonly attribute DOMTimeStamp    timeStamp;
  void               stopPropagation();
  void               preventDefault();
  void               initEvent(in DOMString eventTypeArg, 
                               in boolean canBubbleArg, 
                               in boolean cancelableArg);
  // Introduced in DOM Level 3:
  readonly attribute DOMString       namespaceURI;
  // Introduced in DOM Level 3:
  void               stopImmediatePropagation();
  // Introduced in DOM Level 3:
  readonly attribute boolean         defaultPrevented;
  // Introduced in DOM Level 3:
  void               initEventNS(in DOMString namespaceURIArg, 
                                 in DOMString eventTypeArg, 
                                 in boolean canBubbleArg, 
                                 in boolean cancelableArg);
};
```