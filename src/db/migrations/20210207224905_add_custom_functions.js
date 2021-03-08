const CUSTOM_FUNCTIONS = `
DROP PROCEDURE IF EXISTS on_update_timestamp;
DELIMITER $$
CREATE PROCEDURE on_update_timestamp()
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END$$
DELIMITER;
`

const DROP_CUSTOM_FUNCTIONS = `
DROP FUNCTION on_update_timestamp()
`

exports.up = async knex => knex.raw(CUSTOM_FUNCTIONS)
exports.down = async knex => knex.raw(DROP_CUSTOM_FUNCTIONS)