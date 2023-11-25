const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var clock = new THREE.Clock();
var delta = 0;
clock.start();
var direc = 1;
var direc_lock = 1;
var gc_on = 0;
var gc_x_lock, gc_z_lock;
var ec_x_lock, ec_z_lock;
var ect_x_lock, ect_z_lock;
var ec_x_lock_2, ec_z_lock_2;
var ect_x_lock_2, ect_z_lock_2;
var ec_x_lock_3, ec_z_lock_3;
var ect_x_lock_3, ect_z_lock_3;
var ec_x_lock_4, ec_z_lock_4;
var ect_x_lock_4, ect_z_lock_4;
var kills = 0;
var been_killed = 0;
var renew=0;
var close_view=0;
var chests=0;

const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({ alpha: true });
//renderer.setClearColor('blue');
//renderer.setClearAlpha(0.6);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



// making the boat

const geometry = new THREE.CylinderGeometry(1.5, 1, 1, 6)
const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
cube.position.x = 0;
cube.position.y = 0;
cube.position.z = 0;

const gc_geometry = new THREE.SphereGeometry(0.1, 32, 32);
const gc_material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
const gc_ball = new THREE.Mesh(gc_geometry, gc_material);
scene.add(gc_ball);
gc_ball.position.x = cube.position.x;
gc_ball.position.z = cube.position.z;



const sail_geometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 32)
const sail_material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
const sail = new THREE.Mesh(sail_geometry, sail_material);
scene.add(sail);
sail.position.x = 0.95;
sail.position.y = 0.95;
sail.position.z = 0.0;

////

//making treasure

const t_geometry = new THREE.CylinderGeometry(1.5, 1, 1, 6)
const t_material = new THREE.MeshPhongMaterial({ color: 0xFFFF00 });
const t_cube = new THREE.Mesh(t_geometry, t_material);
scene.add(t_cube);
t_cube.position.x = 3 + getRandomInt(3);
if (getRandomInt(2) == 1)
    t_cube.position.x = -t_cube.position.x;
t_cube.position.y = 0;
t_cube.position.z = 3 + getRandomInt(3);
if (getRandomInt(2) == 1)
    t_cube.position.z = -t_cube.position.z;

////


// making the enemy boat



const e_geometry = new THREE.CylinderGeometry(1.5, 1, 1, 7)
const e_material = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
const e_cube = new THREE.Mesh(e_geometry, e_material);
scene.add(e_cube);
e_cube.position.x = 3 + getRandomInt(3);
if (getRandomInt(2) == 1)
    e_cube.position.x = -e_cube.position.x;
e_cube.position.y = 0;
e_cube.position.z = 3 + getRandomInt(3);
if (getRandomInt(2) == 1)
    e_cube.position.z = -e_cube.position.z;
const ec_geometry = new THREE.SphereGeometry(0.1, 32, 32);
const ec_material = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
const ec_ball = new THREE.Mesh(ec_geometry, ec_material);
scene.add(ec_ball);
ec_ball.position.x = e_cube.position.x;
ec_ball.position.z = e_cube.position.z;


const e_geometry_2 = new THREE.CylinderGeometry(1.5, 1, 1, 7)
const e_material_2 = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
const e_cube_2 = new THREE.Mesh(e_geometry_2, e_material_2);
scene.add(e_cube_2);
e_cube_2.position.x = 5 + getRandomInt(3);
if (getRandomInt(2) == 1)
    e_cube_2.position.x = -e_cube_2.position.x;
e_cube_2.position.y = 0;
e_cube_2.position.z = 5 + getRandomInt(3);
if (getRandomInt(2) == 1)
    e_cube_2.position.z = -e_cube_2.position.z;
const ec_geometry_2 = new THREE.SphereGeometry(0.1, 32, 32);
const ec_material_2 = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
const ec_ball_2 = new THREE.Mesh(ec_geometry_2, ec_material_2);
scene.add(ec_ball_2);
ec_ball_2.position.x = e_cube_2.position.x;
ec_ball_2.position.z = e_cube_2.position.z;



const e_geometry_3 = new THREE.CylinderGeometry(1.5, 1, 1, 7)
const e_material_3 = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
const e_cube_3 = new THREE.Mesh(e_geometry_3, e_material_3);
scene.add(e_cube_3);
e_cube_3.position.x = 5 + getRandomInt(3);
if (getRandomInt(2) == 1)
    e_cube_3.position.x = -e_cube_3.position.x;
e_cube_3.position.y = 0;
e_cube_3.position.z = 5 + getRandomInt(3);
if (getRandomInt(2) == 1)
    e_cube_3.position.z = -e_cube_3.position.z;
const ec_geometry_3 = new THREE.SphereGeometry(0.1, 32, 32);
const ec_material_3 = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
const ec_ball_3 = new THREE.Mesh(ec_geometry_3, ec_material_3);
scene.add(ec_ball_3);
ec_ball_3.position.x = e_cube_3.position.x;
ec_ball_3.position.z = e_cube_3.position.z;




const e_geometry_4 = new THREE.CylinderGeometry(1.5, 1, 1, 7)
const e_material_4 = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
const e_cube_4 = new THREE.Mesh(e_geometry_4, e_material_4);
scene.add(e_cube_4);
e_cube_4.position.x = 5 + getRandomInt(3);
if (getRandomInt(2) == 1)
    e_cube_4.position.x = -e_cube_4.position.x;
e_cube_4.position.y = 0;
e_cube_4.position.z = 5 + getRandomInt(3);
if (getRandomInt(2) == 1)
    e_cube_4.position.z = -e_cube_4.position.z;
const ec_geometry_4 = new THREE.SphereGeometry(0.1, 32, 32);
const ec_material_4 = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
const ec_ball_4 = new THREE.Mesh(ec_geometry_4, ec_material_4);
scene.add(ec_ball_4);
ec_ball_4.position.x = e_cube_4.position.x;
ec_ball_4.position.z = e_cube_4.position.z;


/*const sail_geometry = new THREE.CylinderGeometry( 0.1, 0.1, 1, 32 )
const sail_material = new THREE.MeshPhongMaterial({color: 0x44aa88});
const sail = new THREE.Mesh( sail_geometry, sail_material );
scene.add( sail );
sail.position.x=0.75;
sail.position.y=0.95;
sail.position.z=0.75;*/

////

camera.position.y = 8;
camera.rotateX(270 * THREE.Math.DEG2RAD);


const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function animate() {
    requestAnimationFrame(animate);
    document.getElementById('score').innerHTML ="<center><h2><i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSaturation</i></h2></center>" + "<b>Locomotion: WASD</b> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <b>Kills:</b>"
    +kills + "<br> <b>3D Shoot : Enter</b> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspBeen killed: </b>" + been_killed + "<br><b>3D Viewpoint alteration: 0,1</b> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<b>Chests:</b> " + chests;
    //cube.position.x += 0.01;
    //cube.position.y += 0.01;
    //cube.position.z += 0.01;
    //sail.position.x += 0.01;
    //sail.position.y += 0.01;
    //sail.position.z += 0.01;
    delta = clock.getElapsedTime();
    var int_time = Math.floor(delta);
    //console.log(Math.floor(delta));

    //follow
    //if (cube.position.z < -4)
    
    var dist_t = ((cube.position.x - t_cube.position.x) ** 2) + ((cube.position.z - t_cube.position.z) ** 2);
    if(dist_t<2.5)
    {
        chests++;
        t_cube.position.x = 5 + getRandomInt(3);
        if (getRandomInt(2) == 1)
            t_cube.position.x = -t_cube.position.x;
        t_cube.position.y = 0;
        t_cube.position.z = 3 + getRandomInt(3);
        if (getRandomInt(2) == 1)
            t_cube.position.z = -t_cube.position.z;
    }

    if (gc_on == 1) {
        if (direc_lock == 1) {

            gc_ball.position.x += 0.2;
        }
        if (direc_lock == 2) {

            gc_ball.position.z += 0.2;
        }
        if (direc_lock == 3) {
            gc_ball.position.x -= 0.2;

        }
        if (direc_lock == 4) {

            gc_ball.position.z -= 0.2;
        }
    }
    else {
        gc_ball.position.x = cube.position.x;
        gc_ball.position.z = cube.position.z;
    }
    if (gc_ball.position.x - gc_x_lock > 15 || gc_ball.position.x - gc_x_lock < -15 || gc_ball.position.z - gc_z_lock > 15 || gc_ball.position.z - gc_z_lock < -15) {
        gc_ball.position.x = cube.position.x;
        gc_ball.position.z = cube.position.z;
        gc_on = 0;
    }
    camera.updateMatrix();
    camera.updateMatrixWorld();
    var frustum = new THREE.Frustum();
    frustum.setFromMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));

    // Your 3d point to check
    var pos = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);
    if (!frustum.containsPoint(pos)) {
        camera.position.z = cube.position.z;
        camera.position.x = cube.position.x;
    }


    //

    if (int_time % 5 == 0) {
        ec_ball.position.x = e_cube.position.x;
        ec_ball.position.z = e_cube.position.z;
        ec_x_lock = e_cube.position.x;
        ec_z_lock = e_cube.position.z;
        ect_x_lock = cube.position.x;
        ect_z_lock = cube.position.z;


    }

    if ((int_time+1) % 5 == 0) {
        ec_ball_2.position.x = e_cube_2.position.x;
        ec_ball_2.position.z = e_cube_2.position.z;
        ec_x_lock_2 = e_cube_2.position.x;
        ec_z_lock_2 = e_cube_2.position.z;
        ect_x_lock_2 = cube.position.x;
        ect_z_lock_2 = cube.position.z;


    }

    if ((int_time+2) % 5 == 0) {
        ec_ball_3.position.x = e_cube_3.position.x;
        ec_ball_3.position.z = e_cube_3.position.z;
        ec_x_lock_3 = e_cube_3.position.x;
        ec_z_lock_3 = e_cube_3.position.z;
        ect_x_lock_3 = cube.position.x;
        ect_z_lock_3 = cube.position.z;


    }

    if ((int_time+3) % 5 == 0) {
        ec_ball_4.position.x = e_cube_4.position.x;
        ec_ball_4.position.z = e_cube_4.position.z;
        ec_x_lock_4 = e_cube_4.position.x;
        ec_z_lock_4 = e_cube_4.position.z;
        ect_x_lock_4 = cube.position.x;
        ect_z_lock_4 = cube.position.z;


    }
    ///
    if (ec_x_lock < ect_x_lock) {

        ec_ball.position.x += 0.01 * (ect_x_lock - ec_x_lock);
    }
    else {

        ec_ball.position.x -= 0.01 * (ec_x_lock - ect_x_lock);
    }

    if (ec_z_lock < ect_z_lock) {
        ec_ball.position.z += 0.01 * (ect_z_lock - ec_z_lock);
    }
    else {

        ec_ball.position.z -= 0.01 * (ec_z_lock - ect_z_lock);
    }

    var dist_ec_1 = ((cube.position.x - ec_ball.position.x) ** 2) + ((cube.position.z - ec_ball.position.z) ** 2);
    if (dist_ec_1 < 1.5) {
        cube.position.x = renew;
        cube.position.y = 0;
        cube.position.z = renew;
        sail.position.x=cube.position.x;
        sail.position.z=cube.position.z;
        renew=getRandomInt(8);
        been_killed++;
        
    }
    ///
    ///
    if (ec_x_lock_2 < ect_x_lock_2) {

        ec_ball_2.position.x += 0.01 * (ect_x_lock_2 - ec_x_lock_2);
    }
    else {

        ec_ball_2.position.x -= 0.01 * (ec_x_lock_2 - ect_x_lock_2);
    }

    if (ec_z_lock_2 < ect_z_lock_2) {
        ec_ball_2.position.z += 0.01 * (ect_z_lock_2 - ec_z_lock_2);
    }
    else {

        ec_ball_2.position.z -= 0.01 * (ec_z_lock_2 - ect_z_lock_2);
    }

    var dist_ec_2 = ((cube.position.x - ec_ball_2.position.x) ** 2) + ((cube.position.z - ec_ball_2.position.z) ** 2);
    if (dist_ec_2 < 1.5) {
        cube.position.x = -renew;
        cube.position.y = 0;
        cube.position.z = -renew;
        sail.position.x=cube.position.x;
        sail.position.z=cube.position.z;
        renew=getRandomInt(8);
        been_killed++;
    }

    ///

    ///
    if (ec_x_lock_3 < ect_x_lock_3) {

        ec_ball_3.position.x += 0.01 * (ect_x_lock_3 - ec_x_lock_3);
    }
    else {

        ec_ball_3.position.x -= 0.01 * (ec_x_lock_3 - ect_x_lock_3);
    }

    if (ec_z_lock_3 < ect_z_lock_3) {
        ec_ball_3.position.z += 0.01 * (ect_z_lock_3 - ec_z_lock_3);
    }
    else {

        ec_ball_3.position.z -= 0.01 * (ec_z_lock_3 - ect_z_lock_3);
    }

    var dist_ec_3 = ((cube.position.x - ec_ball_3.position.x) ** 2) + ((cube.position.z - ec_ball_3.position.z) ** 2);
    if (dist_ec_3 < 1.5) {
        cube.position.x = -renew;
        cube.position.y = 0;
        cube.position.z = renew;
        sail.position.x=cube.position.x;
        sail.position.z=cube.position.z;
        renew=getRandomInt(8);
        been_killed++;
    }

    ///

    ///

    if (ec_x_lock_4 < ect_x_lock_4) {

        ec_ball_4.position.x += 0.01 * (ect_x_lock_4 - ec_x_lock_4);
    }
    else {

        ec_ball_4.position.x -= 0.01 * (ec_x_lock_4 - ect_x_lock_4);
    }

    if (ec_z_lock_4 < ect_z_lock_4) {
        ec_ball_4.position.z += 0.01 * (ect_z_lock_4 - ec_z_lock_4);
    }
    else {

        ec_ball_4.position.z -= 0.01 * (ec_z_lock_4 - ect_z_lock_4);
    }

    var dist_ec_4 = ((cube.position.x - ec_ball_4.position.x) ** 2) + ((cube.position.z - ec_ball_4.position.z) ** 2);
    if (dist_ec_4 < 1.5) {
        cube.position.x = renew;
        cube.position.y = 0;
        cube.position.z = -renew;
        sail.position.x=cube.position.x;
        sail.position.z=cube.position.z;
        renew=getRandomInt(8);
        been_killed++;
    }

    ///


    var dist_gc_1 = ((gc_ball.position.x - e_cube.position.x) ** 2) + ((gc_ball.position.z - e_cube.position.z) ** 2);
    if (dist_gc_1 < 1.5) {
        kills++;
        e_cube.position.x = 5 + getRandomInt(3);
        if (getRandomInt(2) == 1)
            e_cube.position.x = -e_cube.position.x;
        e_cube.position.y = 0;
        e_cube.position.z = 3 + getRandomInt(3);
        if (getRandomInt(2) == 1)
            e_cube.position.z = -e_cube.position.z;
    }


    var dist_gc_2 = ((gc_ball.position.x - e_cube_2.position.x) ** 2) + ((gc_ball.position.z - e_cube_2.position.z) ** 2);
    if (dist_gc_2 < 1.5) {
        kills++;
        e_cube_2.position.x = 8 + getRandomInt(3);
        if (getRandomInt(2) == 1)
            e_cube_2.position.x = -e_cube_2.position.x;
        e_cube_2.position.y = 0;
        e_cube_2.position.z = 3 + getRandomInt(3);
        if (getRandomInt(2) == 1)
            e_cube_2.position.z = -e_cube_2.position.z;
    }


    var dist_gc_3 = ((gc_ball.position.x - e_cube_3.position.x) ** 2) + ((gc_ball.position.z - e_cube_3.position.z) ** 2);
    if (dist_gc_3 < 1.5) {
        kills++;
        e_cube_3.position.x = 10 + getRandomInt(3);
        if (getRandomInt(2) == 1)
            e_cube_3.position.x = -e_cube_3.position.x;
        e_cube_3.position.y = 0;
        e_cube_3.position.z = 3 + getRandomInt(3);
        if (getRandomInt(2) == 1)
            e_cube_3.position.z = -e_cube_3.position.z;
    }


    var dist_gc_4 = ((gc_ball.position.x - e_cube_4.position.x) ** 2) + ((gc_ball.position.z - e_cube_4.position.z) ** 2);
    if (dist_gc_4 < 1.5) {
        kills++;
        e_cube_4.position.x = 12 + getRandomInt(3);
        if (getRandomInt(2) == 1)
            e_cube_4.position.x = -e_cube_4.position.x;
        e_cube_4.position.y = 0;
        e_cube_4.position.z = 3 + getRandomInt(3);
        if (getRandomInt(2) == 1)
            e_cube_4.position.z = -e_cube_4.position.z;
    }


    

    ///



    if (e_cube.position.x < cube.position.x) {
        e_cube.position.x += 0.01;

    }
    else if (e_cube.position.x - cube.position.x > 0.1) {
        e_cube.position.x -= 0.01;

    }

    if (e_cube.position.z < cube.position.z && e_cube.position.z - cube.position.z < -0.1) {
        e_cube.position.z += 0.01;

    }
    else if (e_cube.position.z - cube.position.z > 0.1) {
        e_cube.position.z -= 0.01;

    }


    if (e_cube_2.position.x < cube.position.x)
        e_cube_2.position.x += 0.01;
    else
        e_cube_2.position.x -= 0.01;


    if (e_cube_2.position.z < cube.position.z)
        e_cube_2.position.z += 0.01;
    else
        e_cube_2.position.z -= 0.01;


    if (e_cube_3.position.x < cube.position.x)
        e_cube_3.position.x += 0.01;
    else
        e_cube_3.position.x -= 0.01;


    if (e_cube_3.position.z < cube.position.z)
        e_cube_3.position.z += 0.01;
    else
        e_cube_3.position.z -= 0.01;


    if (e_cube_4.position.x < cube.position.x)
        e_cube_4.position.x += 0.01;
    else
        e_cube_4.position.x -= 0.01;


    if (e_cube_4.position.z < cube.position.z)
        e_cube_4.position.z += 0.01;
    else
        e_cube_4.position.z -= 0.01;
    if(close_view==1)
    {
        camera.position.x = cube.position.x;
        camera.position.y = 2;
        camera.position.z = cube.position.z;
    }
    renderer.render(scene, camera);
};

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 87) {

        cube.position.z -= 0.2;
        sail.position.z = cube.position.z - 0.95;
        sail.position.x = cube.position.x;
        direc = 4;
    } else if (keyCode == 83) {
        cube.position.z += 0.2;
        sail.position.z = cube.position.z + 0.95;
        sail.position.x = cube.position.x;
        direc = 2;
    } else if (keyCode == 65) {
        cube.position.x -= 0.2;
        sail.position.z = cube.position.z;
        sail.position.x = cube.position.x - 0.95;
        direc = 3;
    } else if (keyCode == 68) {
        cube.position.x += 0.2;
        sail.position.z = cube.position.z;
        sail.position.x = cube.position.x + 0.95;
        direc = 1;
    }
    else if (keyCode == 66) {
        cube.position.set(0, 0, 0);
        sail.position.set(0.75, 0.95, 0.75);
    }
    else if (keyCode == 13) {
        gc_on = 1;
        direc_lock = direc;
        gc_x_lock = cube.position.x;
        gc_z_lock = cube.position.z;
    }

    else if (keyCode == 48) {
        
        camera.position.x = cube.position.x;
        camera.position.y = 2;
        camera.position.z = cube.position.z;
        camera.rotateX(90 * THREE.Math.DEG2RAD);
        close_view=1;

        
    }
    else if (keyCode == 49) {
        camera.position.x = cube.position.x;
        camera.position.y = 8;
        camera.position.z = cube.position.z;
        camera.rotateX(90 * THREE.Math.DEG2RAD);
        close_view=0;
    }
};



animate();
