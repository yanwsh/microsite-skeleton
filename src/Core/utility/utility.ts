/**
 * Created by wensheng on 2016/5/27.
 */
function whichTransitionEvent(){
    var t: any;
    var el = document.createElement('div');
    var transitions = {
        'transition':'transitionend',
        'OTransition':'oTransitionEnd',
        'MozTransition':'transitionend',
        'WebkitTransition':'webkitTransitionEnd'
    };

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}

function whichAnimationEvent(){
    var t: any,
        el = document.createElement("div");

    var animations = {
        "animation"      : "animationend",
        "OAnimation"     : "oAnimationEnd",
        "MozAnimation"   : "animationend",
        "WebkitAnimation": "webkitAnimationEnd"
    };

    for (t in animations){
        if (el.style[t] !== undefined){
            return animations[t];
        }
    }
}

/* Listen for a transition! */
export var transitionEvent: string = whichTransitionEvent();
export var animationEvent: string = whichAnimationEvent();
