import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script2 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(15, 2, 10.176342964172363),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883503437042236, 4.795694828033447, 1.0005861520767212)
})
nftPictureFrame2.addComponentOrReplace(transform3)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(15, 2, 6.657499313354492),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883510589599609, 4.795694828033447, 1.0005863904953003)
})
nftPictureFrame9.addComponentOrReplace(transform4)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(11.513779640197754, 2, 0.5000002980232239),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.883506774902344, 4.795694828033447, 1.0005881786346436)
})
nftPictureFrame10.addComponentOrReplace(transform5)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(0.49720463156700134, 2, 3.038335084915161),
  rotation: new Quaternion(-7.652456693289116e-16, -0.6958175301551819, 8.29479205322059e-8, -0.7182188034057617),
  scale: new Vector3(4.883510589599609, 4.795694828033447, 1.0005884170532227)
})
nftPictureFrame.addComponentOrReplace(transform6)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(0.49720463156700134, 2, 6.675734519958496),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883516788482666, 4.795694828033447, 1.0005888938903809)
})
nftPictureFrame3.addComponentOrReplace(transform7)

const nftPictureFrame14 = new Entity('nftPictureFrame14')
engine.addEntity(nftPictureFrame14)
nftPictureFrame14.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(15, 6.5, 7.244462013244629),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883530139923096, 4.795694828033447, 1.0005871057510376)
})
nftPictureFrame14.addComponentOrReplace(transform8)

const nftPictureFrame18 = new Entity('nftPictureFrame18')
engine.addEntity(nftPictureFrame18)
nftPictureFrame18.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(0.4972047805786133, 6.5, 3.038334846496582),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883517742156982, 4.795694828033447, 1.0005888938903809)
})
nftPictureFrame18.addComponentOrReplace(transform9)

const nftPictureFrame19 = new Entity('nftPictureFrame19')
engine.addEntity(nftPictureFrame19)
nftPictureFrame19.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(0.4972047805786133, 6.5, 6.675734519958496),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883522987365723, 4.795694828033447, 1.000589370727539)
})
nftPictureFrame19.addComponentOrReplace(transform10)

const nftPictureFrame21 = new Entity('nftPictureFrame21')
engine.addEntity(nftPictureFrame21)
nftPictureFrame21.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(15, 11.181482315063477, 10.176342964172363),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883528232574463, 4.795694828033447, 1.0005868673324585)
})
nftPictureFrame21.addComponentOrReplace(transform11)

const nftPictureFrame22 = new Entity('nftPictureFrame22')
engine.addEntity(nftPictureFrame22)
nftPictureFrame22.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(15, 11.181482315063477, 6.657499313354492),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.8835344314575195, 4.795694828033447, 1.0005871057510376)
})
nftPictureFrame22.addComponentOrReplace(transform12)

const nftPictureFrame23 = new Entity('nftPictureFrame23')
engine.addEntity(nftPictureFrame23)
nftPictureFrame23.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(11.513779640197754, 11.181482315063477, 0.5),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.8835248947143555, 4.795694828033447, 1.0005927085876465)
})
nftPictureFrame23.addComponentOrReplace(transform13)

const nftPictureFrame25 = new Entity('nftPictureFrame25')
engine.addEntity(nftPictureFrame25)
nftPictureFrame25.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(3.5357394218444824, 11.181482315063477, 0.5000009536743164),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.8835225105285645, 4.795694828033447, 1.0005921125411987)
})
nftPictureFrame25.addComponentOrReplace(transform14)

const nftPictureFrame29 = new Entity('nftPictureFrame29')
engine.addEntity(nftPictureFrame29)
nftPictureFrame29.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(15, 16, 10.176342964172363),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883515357971191, 4.795694828033447, 1.0005871057510376)
})
nftPictureFrame29.addComponentOrReplace(transform15)

const nftPictureFrame30 = new Entity('nftPictureFrame30')
engine.addEntity(nftPictureFrame30)
nftPictureFrame30.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(15, 16, 6.657499313354492),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883521556854248, 4.795694828033447, 1.0005873441696167)
})
nftPictureFrame30.addComponentOrReplace(transform16)

const nftPictureFrame31 = new Entity('nftPictureFrame31')
engine.addEntity(nftPictureFrame31)
nftPictureFrame31.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(11.513779640197754, 16, 0.5000000596046448),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.883517742156982, 4.795694828033447, 1.0005909204483032)
})
nftPictureFrame31.addComponentOrReplace(transform17)

const nftPictureFrame33 = new Entity('nftPictureFrame33')
engine.addEntity(nftPictureFrame33)
nftPictureFrame33.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(3.5357394218444824, 16, 0.5000009536743164),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.88352108001709, 4.795694828033447, 1.00059175491333)
})
nftPictureFrame33.addComponentOrReplace(transform18)

const nftPictureFrame34 = new Entity('nftPictureFrame34')
engine.addEntity(nftPictureFrame34)
nftPictureFrame34.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(0.4972047805786133, 16, 3.038334846496582),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883523464202881, 4.795694828033447, 1.000589370727539)
})
nftPictureFrame34.addComponentOrReplace(transform19)

const nftPictureFrame35 = new Entity('nftPictureFrame35')
engine.addEntity(nftPictureFrame35)
nftPictureFrame35.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(0.4972047805786133, 16, 6.675734519958496),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883525371551514, 4.795694828033447, 1.0005898475646973)
})
nftPictureFrame35.addComponentOrReplace(transform20)

const nftPictureFrame36 = new Entity('nftPictureFrame36')
engine.addEntity(nftPictureFrame36)
nftPictureFrame36.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(0.4972047805786133, 16, 10.198812484741211),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883525371551514, 4.795694828033447, 1.0005900859832764)
})
nftPictureFrame36.addComponentOrReplace(transform21)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(0.4972047805786133, 6.5, 13.698812484741211),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.8835272789001465, 5.895027160644531, 1.0005905628204346)
})
nftPictureFrame4.addComponentOrReplace(transform22)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(0.4972047805786133, 16, 13.698812484741211),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.88352632522583, 4.795694828033447, 1.0005903244018555)
})
nftPictureFrame7.addComponentOrReplace(transform23)

const nftPictureFrame37 = new Entity('nftPictureFrame37')
engine.addEntity(nftPictureFrame37)
nftPictureFrame37.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(15, 6.5, 3.292409896850586),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(6.179809093475342, 4.84365177154541, 1.0009907484054565)
})
nftPictureFrame37.addComponentOrReplace(transform24)

const nftPictureFrame38 = new Entity('nftPictureFrame38')
engine.addEntity(nftPictureFrame38)
nftPictureFrame38.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(15, 11.181482315063477, 3.5),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883525848388672, 4.795694828033447, 1.0005873441696167)
})
nftPictureFrame38.addComponentOrReplace(transform25)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(15, 2.238152503967285, 2.963348865509033),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000033378601074, 2, 1.0000016689300537)
})
imageFromURL.addComponentOrReplace(transform26)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(7.2621049880981445, 1.7381525039672852, 0.4633494019508362),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.000004291534424, 3, 1.000002145767212)
})
imageFromURL2.addComponentOrReplace(transform27)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(3.37274169921875, 2.238152503967285, 0.46334952116012573),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.000004291534424, 2, 1.000002145767212)
})
imageFromURL3.addComponentOrReplace(transform28)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(0.37274169921875, 2.0854711532592773, 10.463349342346191),
  rotation: new Quaternion(-2.512202736283794e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.4898502826690674, 2.5600461959838867, 1.0000042915344238)
})
imageFromURL4.addComponentOrReplace(transform29)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(0.37274158000946045, 6.704496383666992, 10.463349342346191),
  rotation: new Quaternion(-2.512202736283794e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000061988830566, 2, 1.0000030994415283)
})
imageFromURL5.addComponentOrReplace(transform30)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(3.37274169921875, 6.788402557373047, 0.46334952116012573),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.000004291534424, 2, 1.000002145767212)
})
imageFromURL6.addComponentOrReplace(transform31)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(11.559871673583984, 6.788402557373047, 0.46334850788116455),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.000004291534424, 2, 1.000002145767212)
})
imageFromURL7.addComponentOrReplace(transform32)

const imageFromURL8 = new Entity('imageFromURL8')
engine.addEntity(imageFromURL8)
imageFromURL8.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(15, 6.738152503967285, 10.65749740600586),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000004768371582, 2, 1.000002384185791)
})
imageFromURL8.addComponentOrReplace(transform33)

const imageFromURL9 = new Entity('imageFromURL9')
engine.addEntity(imageFromURL9)
imageFromURL9.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(15, 11.481697082519531, 13.57827377319336),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000052452087402, 2, 1.0000026226043701)
})
imageFromURL9.addComponentOrReplace(transform34)

const imageFromURL10 = new Entity('imageFromURL10')
engine.addEntity(imageFromURL10)
imageFromURL10.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(7.672002792358398, 11.390192985534668, 0.4633488357067108),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.000004291534424, 2, 1.000002145767212)
})
imageFromURL10.addComponentOrReplace(transform35)

const imageFromURL11 = new Entity('imageFromURL11')
engine.addEntity(imageFromURL11)
imageFromURL11.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(0.37274158000946045, 11.436701774597168, 2.9643125534057617),
  rotation: new Quaternion(-2.512202736283794e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000007152557373, 2, 1.0000035762786865)
})
imageFromURL11.addComponentOrReplace(transform36)

const imageFromURL12 = new Entity('imageFromURL12')
engine.addEntity(imageFromURL12)
imageFromURL12.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(0.37274158000946045, 11.436701774597168, 6.690377235412598),
  rotation: new Quaternion(-2.512202736283794e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000076293945312, 2, 1.0000038146972656)
})
imageFromURL12.addComponentOrReplace(transform37)

const imageFromURL13 = new Entity('imageFromURL13')
engine.addEntity(imageFromURL13)
imageFromURL13.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(0.37274158000946045, 11.436701774597168, 10.230411529541016),
  rotation: new Quaternion(-2.512202736283794e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000081062316895, 2, 1.0000040531158447)
})
imageFromURL13.addComponentOrReplace(transform38)

const imageFromURL14 = new Entity('imageFromURL14')
engine.addEntity(imageFromURL14)
imageFromURL14.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(7.596166610717773, 6.788402557373047, 0.4633491039276123),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.000004291534424, 2, 1.000002145767212)
})
imageFromURL14.addComponentOrReplace(transform39)

const imageFromURL15 = new Entity('imageFromURL15')
engine.addEntity(imageFromURL15)
imageFromURL15.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(7.672002792358398, 16.188060760498047, 0.4633488357067108),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.000004291534424, 2, 1.000002145767212)
})
imageFromURL15.addComponentOrReplace(transform40)

const imageFromURL16 = new Entity('imageFromURL16')
engine.addEntity(imageFromURL16)
imageFromURL16.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(15, 15.738151550292969, 2.963348865509033),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000004768371582, 3, 1.000002384185791)
})
imageFromURL16.addComponentOrReplace(transform41)

const imageFromURL17 = new Entity('imageFromURL17')
engine.addEntity(imageFromURL17)
imageFromURL17.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(4.1481475830078125, 0.7381525039672852, 16),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(3.6148998737335205, 5.810399055480957, 1.0000017881393433)
})
imageFromURL17.addComponentOrReplace(transform42)

const imageFromURL18 = new Entity('imageFromURL18')
engine.addEntity(imageFromURL18)
imageFromURL18.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(7.511935234069824, 11.508377075195312, 15.88036823272705),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(4.810523509979248, 4.503478050231934, 1.0000020265579224)
})
imageFromURL18.addComponentOrReplace(transform43)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
script1.init(options)
script2.init(options)
script1.spawn(nftPictureFrame2, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script1.spawn(nftPictureFrame9, {"id":"92327624419284968026561196978443474505882688196369155762059720134056438923265","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))
script1.spawn(nftPictureFrame10, {"id":"111159128381372626910652031113492135664716420447363763558681550822352569237505","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))
script1.spawn(nftPictureFrame, {"id":"38950671697601544062108757284002515516414969820193633712897104440008057552897","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script1.spawn(nftPictureFrame3, {"id":"31815638195728779984768712466496232472651897566989993371973986550817635696641","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script1.spawn(nftPictureFrame14, {"id":"59746008365344405549815464378362077223154418598033145103785031559726965456897","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame14, channelBus))
script1.spawn(nftPictureFrame18, {"id":"48610320024859372553589123052405298414844389561051891785343115735767495737345","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame18, channelBus))
script1.spawn(nftPictureFrame19, {"id":"15361516539692625083717327256656893080802494198468488594857856471770268172289","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame19, channelBus))
script1.spawn(nftPictureFrame21, {"id":"42820056077208632438472318756802601598897068716654443376075230669901708394497","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame21, channelBus))
script1.spawn(nftPictureFrame22, {"id":"96138625604365907075283655418098061868270356477627456576767156301987378626561","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame22, channelBus))
script1.spawn(nftPictureFrame23, {"id":"76146391405975450837081375182255684009851369545408198409339318523365192368129","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame23, channelBus))
script1.spawn(nftPictureFrame25, {"id":"30","contract":"0x18da8be743b76b57164220483c6ab15f37ca1417","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame25, channelBus))
script1.spawn(nftPictureFrame29, {"id":"6","contract":"0x21ac824c1b1369971e437c5e92a84a136da1b1eb","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame29, channelBus))
script1.spawn(nftPictureFrame30, {"id":"26433618378915252863224991376847594790128237178896057161270275561653270478849","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame30, channelBus))
script1.spawn(nftPictureFrame31, {"id":"18222323781383751126728125250634993733550935018440079598159245832465026121729","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame31, channelBus))
script1.spawn(nftPictureFrame33, {"id":"106212411486624036609867579056613694894334480661660538001499774977753319735297","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame33, channelBus))
script1.spawn(nftPictureFrame34, {"id":"97023422165191350506408295343895003735325583355097565396499584845384700133377","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame34, channelBus))
script1.spawn(nftPictureFrame35, {"id":"45985406931320640419340270664310518369456465793665822438623011136115220414465","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame35, channelBus))
script1.spawn(nftPictureFrame36, {"id":"1","contract":"0xc9b3ad613dcfbefebd15c6146873286af301b09a","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame36, channelBus))
script1.spawn(nftPictureFrame4, {"id":"26046832965360609860866363822675472440901155191145999038932145098843450507265","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script1.spawn(nftPictureFrame7, {"id":"2","contract":"0x6390080ba8301A05D12FB2A1bEfd2a5Ee9a88047","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script1.spawn(nftPictureFrame37, {"id":"2","contract":"0xeb44314cfc91707375d8ed467ffb05ffa31551e7","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame37, channelBus))
script1.spawn(nftPictureFrame38, {"id":"49851820652093188238948531853459214847390723310555479758402851462419807469569","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame38, channelBus))
script2.spawn(imageFromURL, {"image":"https://i.ibb.co/5LJS5M8/3.png"}, createChannel(channelId, imageFromURL, channelBus))
script2.spawn(imageFromURL2, {"image":"https://i.ibb.co/Hp08B4V/twitter-b159e817ee865ce610cfb21392eb1ccf.jpg"}, createChannel(channelId, imageFromURL2, channelBus))
script2.spawn(imageFromURL3, {"image":"https://i.ibb.co/Mk8tYXf/6.png"}, createChannel(channelId, imageFromURL3, channelBus))
script2.spawn(imageFromURL4, {"image":"https://i.ibb.co/0BH5Hcg/9.png"}, createChannel(channelId, imageFromURL4, channelBus))
script2.spawn(imageFromURL5, {"image":"https://i.ibb.co/fvsmc7p/11.jpg"}, createChannel(channelId, imageFromURL5, channelBus))
script2.spawn(imageFromURL6, {"image":"https://i.ibb.co/Zcw8056/14.jpg"}, createChannel(channelId, imageFromURL6, channelBus))
script2.spawn(imageFromURL7, {"image":"https://i.ibb.co/4MgRJ9t/16.png"}, createChannel(channelId, imageFromURL7, channelBus))
script2.spawn(imageFromURL8, {"image":"https://i.ibb.co/88JkjvR/19.png"}, createChannel(channelId, imageFromURL8, channelBus))
script2.spawn(imageFromURL9, {"image":"https://i.ibb.co/dtyCj2X/20.png"}, createChannel(channelId, imageFromURL9, channelBus))
script2.spawn(imageFromURL10, {"image":"https://i.ibb.co/RjQ53d1/25.png"}, createChannel(channelId, imageFromURL10, channelBus))
script2.spawn(imageFromURL11, {"image":"https://i.ibb.co/Kw0PCBg/27.png"}, createChannel(channelId, imageFromURL11, channelBus))
script2.spawn(imageFromURL12, {"image":"https://i.ibb.co/0M3CrpG/28.jpg"}, createChannel(channelId, imageFromURL12, channelBus))
script2.spawn(imageFromURL13, {"image":"https://i.ibb.co/rZQZNph/29.png"}, createChannel(channelId, imageFromURL13, channelBus))
script2.spawn(imageFromURL14, {"image":"https://i.ibb.co/G3nXkR4/15.jpg"}, createChannel(channelId, imageFromURL14, channelBus))
script2.spawn(imageFromURL15, {"image":"https://i.ibb.co/xGDF3wZ/35.png"}, createChannel(channelId, imageFromURL15, channelBus))
script2.spawn(imageFromURL16, {"image":"https://i.ibb.co/QfZ1BWb/1ac0896fa26393b7a0f49f13c7fdd43e-dat.jpg"}, createChannel(channelId, imageFromURL16, channelBus))
script2.spawn(imageFromURL17, {"image":"https://i.ibb.co/qDwkR8d/image.png"}, createChannel(channelId, imageFromURL17, channelBus))
script2.spawn(imageFromURL18, {"image":"https://i.ibb.co/CMhDHFx/logo.png"}, createChannel(channelId, imageFromURL18, channelBus))