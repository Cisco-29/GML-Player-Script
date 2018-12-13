// Create Event

// Initialise the Player

target_x = x;
target_y = y;
moving = false;


image_speed = 1;

// Character Facing States

enum facing {
	up = 0,
	down = 1,
	left = 2,
	right = 3
}

state = facing.down

// Idle Delay Timer

room_speed = 60

idle_delay = room_speed * 10


//Tile Collisions

tilesize = 32

// Step Event

// Handle Player Movement

// CHECK I N P U T

if(keyboard_check(vk_up) && !moving ) {
	moving = true;																// Move State
	if !place_meeting (x, y - tilesize, obj_collision) {target_y -= 32}			// If there is no collision with obj_collision in the next tile, move player 32 pixels/1 tile
	state = facing.up															// Player Facing
	idle_delay = room_speed * 10												// Reset Idle Timer
	image_speed = 1;															// Sprite animation speed
	sprite_index = sprPlayerWalkUp												// Sprite
}

if(keyboard_check(vk_down) && !moving ) {
	moving = true;
	if !place_meeting (x, y + tilesize, obj_collision) {target_y += 32}	
	state = facing.down
	idle_delay = room_speed * 10
	image_speed = 1;
	sprite_index = sprPlayerWalkDown
}

if(keyboard_check(vk_left) && !moving ) {
	moving = true;
	if !place_meeting (x - tilesize, y, obj_collision) {target_x -= 32}
	state = facing.left
	idle_delay = room_speed * 10
	image_speed = 1;
	sprite_index = sprPlayerWalkLeft
} 

if(keyboard_check(vk_right) && !moving ) {
	moving = true;
	if !place_meeting (x + tilesize, y, obj_collision) {target_x += 32}	
	state = facing.right
	idle_delay = room_speed * 10
	image_speed = 1;
	sprite_index = sprPlayerWalkRight
}



// Move player. the x += 2 value is the speed.

if ( target_y < y ) { y -= 2 } // moving up
if ( target_y > y ) { y += 2 } // moving down
if ( target_x < x ) { x -= 2 } // moving left
if ( target_x > x ) { x += 2 } // moving right




// Check for destination
// This will stop the walking animation when you let go of a key. 
// It also triggers the idle movement in the respective direction.

if (target_x == x && target_y == y) {    // move player
	
	moving = false;  // moving state
	
} 


idle_delay -= 30; // Delay to idle animation

// This is needed as the idle sprite interferes with the walk animation.
// Without it, the character kinda... limps?!


if (moving = false && idle_delay = 0 && state == facing.up) {
	sprite_index = sprPlayerIdleUp
	image_speed = 1
	
}

if (moving = false && idle_delay = 0 && state == facing.down) {
	sprite_index = sprPlayerIdleDown
	image_speed = 1
	
}

if (moving = false && idle_delay = 0 && state == facing.left) {
	sprite_index = sprPlayerIdleLeft
	image_speed = 1
	
}

if (moving = false && idle_delay = 0 && state == facing.right) {
	sprite_index = sprPlayerIdleRight
	image_speed = 1
	
}

