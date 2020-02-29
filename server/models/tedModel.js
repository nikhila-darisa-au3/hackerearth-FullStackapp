module.exports = function(sequelize,Sequelize) {
    var tedData =  sequelize.define('ted', {
        description:Sequelize.TEXT,
        event:Sequelize.TEXT,
        main_speaker:Sequelize.TEXT,
        name:Sequelize.TEXT,
        published_date:Sequelize.TEXT,
        ratings:Sequelize.JSONB,
        related_talks:Sequelize.JSONB,
        speaker_occupation:Sequelize.TEXT,
        tags:Sequelize.JSONB,
        title:Sequelize.TEXT,
        url:Sequelize.TEXT,
        views:Sequelize.INTEGER

    })
    return tedData
}

