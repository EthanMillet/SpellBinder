const User = require('./User');
const Binder = require('./Binder');
const Page = require('./Page');
const Canvas = require('./Canvas');
const Continent = require('./Continent');
const Map = require('./Map');
const NPC = require('./NPC');
const Player = require('./Player');

User.hasMany(Binder, {

})

Binder.belongsTo(User, {

})

Page.belongsTo(Binder, {

})

Canvas.belongsTo(Binder, {
    
})

Continent.belongsTo(Binder, {
    
})

Map.belongsTo(Binder, {
    
})

NPC.belongsTo(Binder, {
    
})

Player.belongsTo(Binder, {
    
})