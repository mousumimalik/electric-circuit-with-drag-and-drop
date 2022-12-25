var switchOnOff = document.getElementById("switch");
var bulb = document.querySelector(".light");
var arrows = document.getElementsByClassName("arrow");
var flag = true;
var onOff = false;

function light() {
    bulb.classList.remove("light");
    bulb.classList.add("on-light");
}

function switched( btn ) {
    if( flag ) {
        switchOnOff.style.color = "green";

        for (var i=0; i<arrows.length; i+=1){
            arrows[i].style.display = 'flex';
        }

        light();

        flag = false;
        onOff = true;
    }
    else {
        switchOnOff.style.color = "red";

        for (var i=0; i<arrows.length; i+=1){
            arrows[i].style.display = 'none';
        }

        bulb.classList.remove("on-light");
        bulb.classList.add("light");

        flag = true;
        onOff = false;
    }
}



let arrowV = document.getElementById('arrow_v');
let currentDroppable = null;

compas.onmousedown = function(event) {
    // let shiftX = event.clientX - compas.getBoundingClientRect().left;
    let shiftY = event.clientY - compas.getBoundingClientRect().top;

    compas.style.position = 'absolute';
    compas.style.zIndex = 1000;
    document.body.append(compas);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
    //   compas.style.left = pageX - shiftX + 'px';
      compas.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        compas.hidden = true;

        let circuitContainer = document.elementFromPoint(event.clientX, event.clientY);
        // console.log(circuitContainer);

        compas.hidden = false;

        if (!circuitContainer) return;

        let droppableArea = circuitContainer.closest('.droppable');
        // console.log(droppableArea);

        if (currentDroppable != droppableArea) {
            if (currentDroppable) { 
                leaveDroppable(currentDroppable);
            }

            currentDroppable = droppableArea;

            if (currentDroppable) { 
                enterDroppable(currentDroppable);
            }
        }
    }

    document.addEventListener('mousemove', onMouseMove);

    compas.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        compas.onmouseup = null;
    };
};


function enterDroppable(circuit) {
    // circuit.style.borderColor = 'red';
    if(onOff) {
        // document.getElementById('compas').src = "east_west" + ".jpg";
        // document.getElementById('arrows').style.animation = 'spin 2.0s alternate infinite';
        // document.getElementById('arrows').style.transform = 'rotate(90deg)';
        // document.getElementById('arrow_v').style.animation = 'rotate_it 5s alternate infinite forwards';



        function printMousePos(e){
            var cursorY = e.clientY;
            console.log(" Y " + cursorY);
        
            if(cursorY < 500 && cursorY > 450)  {
                arrowV.style.animation = 'rotate_it1 5s alternate 1 forwards';
                console.log(cursorY, " < 500 && ", cursorY, " > 450", "30deg");
            } 
            else if(cursorY < 450 && cursorY > 400)  {
                arrowV.style.animation = 'rotate_it2 5s alternate 1 forwards';
                console.log(cursorY, " < 450 && ", cursorY, " > 400", "60deg");
            }
            else if(cursorY < 400 && cursorY > 300)  {
                arrowV.style.animation = 'rotate_it3 5s alternate 1 forwards';
                console.log(cursorY, " < 400 && ", cursorY, " > 350", "90deg");
            }
            else if(cursorY < 300 && cursorY > 250) {
                arrowV.style.animation = 'rotate_it2 5s alternate 1 forwards';
                console.log(cursorY, " <350 && ", cursorY, " > 200", "60deg");
            }
            else if(cursorY < 250 && cursorY > 150) {
                arrowV.style.animation = 'rotate_it1 5s alternate 1 forwards';
                console.log(cursorY, " < 200 && ", cursorY, " > 150", "30deg");
            }
            else {
                arrowV.style.animation = 'none';
            }
        
        }
        document.addEventListener("mouseoup", printMousePos);
        document.addEventListener("mousedown", printMousePos);



        bulb.classList.add('onEffect');
    }
}

function leaveDroppable(circuit) {
    // circuit.style.borderColor = '';
    // document.getElementById('compas').src = "south_north" + ".jpg";
    // document.getElementById('arrows').style.animation = 'none';
    // document.getElementById('arrows').style.transform = 'rotate(0deg)';

    arrowV.style.animation = 'none';
 
    bulb.classList.remove('onEffect');
}

compas.ondragstart = function() {
    return false;
};
