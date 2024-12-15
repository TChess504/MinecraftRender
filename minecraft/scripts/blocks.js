
import * as THREE from "three";
//const THREE = require('three');
const textureLoader = new THREE.TextureLoader();

function loadTexture(path){
    const texture = textureLoader.load(path);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    return texture;
}
const textures = {
    dirt: loadTexture('textures/dirt.png'),
    grass: loadTexture('textures/grass.png'),
    grassSide: loadTexture('textures/grass_side.png'),
    diamondOre: loadTexture('textures/diamond_ore.png'),
    redstoneOre: loadTexture('textures/redstone_ore.png'),
    cobblestone: loadTexture('textures/cobblestone.png'),
    obisidian: loadTexture('textures/obisidian.png'),
}

export const blocks = {
    empty: {
      id: 0,
      name:'empty',
      visible: false
    },
    grass: {
      id: 1,
      name: 'grass',
      color: 0x046b42,
      material:[
        new THREE.MeshLambertMaterial({map: textures.grassSide}),//right
        new THREE.MeshLambertMaterial({map: textures.grassSide}),//left
        new THREE.MeshLambertMaterial({map: textures.grass}),//top
        new THREE.MeshLambertMaterial({map: textures.dirt}),//bottom
        new THREE.MeshLambertMaterial({map: textures.grassSide}),//front
        new THREE.MeshLambertMaterial({map: textures.grassSide})//back
      ]
    },
    dirt: {
      id: 2,
      name: 'dirt',
      color: 0x807020,
      material: new THREE.MeshLambertMaterial({map: textures.dirt})
    },
    diamondOre: {
        id: 3,
        name: 'diamond_ore',
        material: new THREE.MeshLambertMaterial({ map: textures.diamondOre }),
        scale: { x: 30, y: 30, z: 30 },
        scarcity: 0.8
    },
    redstoneOre: {
        id: 4,
        name: 'redstone_ore',
        material: new THREE.MeshLambertMaterial({ map: textures.redstoneOre }),
        scale: { x: 20, y: 20, z: 20 },
        scarcity: 0.9
    },
    cobblestone: {
        id: 5,
        name: 'cobblestone',
        material: new THREE.MeshLambertMaterial({ map: textures.cobblestone }),
        scale: { x: 40, y: 40, z: 40 },
        scarcity: 0.9
    },
    obisidan: {
        id: 6,
        name: 'obisdian',
        material: new THREE.MeshLambertMaterial({ map: textures.obisidian }),
        scale: { x: 20, y: 20, z: 20 },
        scarcity: 0.9
    }
  };
  export const resources = [
    blocks.diamondOre,
    blocks.redstoneOre,
    blocks.redstoneOre,
    blocks.cobblestone,
    blocks.obisidan
  ];