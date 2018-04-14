### three phases of event flows
#### phase 1: capture phase 
the event is dispatched to the target's ancestors from the root of the tree to the direct parent of the target node.


#### phase 2
the event is dispatched to the target node.



#### phase 3: bubbling stage
the event is dispatched to the target's ancestors from the direct parent of the target node to the root of the tree.

<img src="https://www.w3.org/TR/2006/WD-DOM-Level-3-Events-20060413/images/eventflow.png" alt=""> 
#### Event listeners
Event listeners can be registered on all nodes in the tree for a specfic type of event or event category, phase, and group.



#### add a event listener and remove a event listeners  to a dom element for specified event type
```javascript
var oDiv = document.getElementById('demo')
var hanlder = function (e) {
  console.log('event hanlder called')
  console.log(e)
}
// odiv.addEventListener(type: DOMString, callback: EventListener, capture?: boolean)
oDiv.addEventListener('mousedown', handler, true)

odiv.removeEventListener('mousedown', handler, true)
```


<strong>
An event listener is always part of a group. It is either explicitly in a group if a group has been specified at the registration or implicitly in the default group if no group has been specified. <i>Within a group, event listeners are ordered in their order of registration.</i>
</strong> The tigger order of event listeners is the same with their registration order.



#### stop event propagation
- immediate: no more event listeners from the same group will be triggered by the event object (see Event.stopImmediatePropagation());
- deferred until all event listeners from the same group have been triggered on the current node, i.e. the event listeners of the same group attached on other nodes will not be triggered (see Event.stopPropagation()).
- Cancelble event



### Event types
some event type do not support bubbling phase.
<i>focus</i>, <i>blur</i>, <i>load</i>, <i>unload</i>



### Event Interface
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

#### Properties
The most common used properties of are
- event type: type
- event flow: eventPhase {1, 2, 3}
- target the event triggered element
- the handlers binded element: currentTarget 
- timestamp: when the event triggered

#### Methods


### Interface EventTarget (introduced in DOM Level 2)
The EventTarget interface is implemented by all the objects which could be event targets in an implementation which supports the Event flows. The interface allows registration and removal of event listeners, and dispatch of events to an event target.

The source code of EventTarget is following:
```c
// Introduced in DOM Level 2:
interface EventTarget {
  void  addEventListener(in DOMString type, 
          in EventListener listener, 
          in boolean useCapture);
  void  removeEventListener(in DOMString type, 
          in EventListener listener, 
          in boolean useCapture);

  // Modified in DOM Level 3:
  boolean dispatchEvent(in Event evt)
          r6yyyyyyyyyyyyyyyyyyyyyyyyyyyhnaises(EventException, 
          DOMException);

  // Introduced in DOM Level 3:
  void  addEventListenerNS(in DOMString namespaceURI, 
        in DOMString type, 
                                        in EventListener listener, 
                                        in boolean useCapture, 
                                        in DOMObject evtGroup);
  // Introduced in DOM Level 3:
  void               removeEventListenerNS(in DOMString namespaceURI, 
                                           in DOMString type, 
                                           in EventListener listener, 
                                           in boolean useCapture);
};
```
JQuery supports event namespace too, for example. 
<a href="http://www.haorooms.com/post/jquery_namespaces_eventname">http://www.haorooms.com/post/jquery_namespaces_eventname</a>

<strong>All the DOM HTMLELEMNT instance inherit EventTarget class.</strong>
```javascript
console.log(document.body instanceof EventTarget) //true
console.log(document.body.constructor instanceof EventTarget) // false
```

#### Create
In most cases, the events dispatched by the DOM Events implemetation are slso created by the implementation.
example code:
```javascript
var event = new Event('build');

// Listen for the event.
elem.addEventListener('build', function (e) { ... }, false);

// Dispatch the event.
elem.dispatchEvent(event);
```
This part code is also the philosophy of <i>Vue.js</i> event bus.

references:
- <a href="https://www.w3.org/TR/2006/WD-DOM-Level-3-Events-20060413/events.html">W3c  event standard</a>
- <a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Creating_and_triggering_events">MDN create custom event</a>



