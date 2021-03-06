/*global define: false */
/**
 * Adds methods to {@link module:character} related to Resistances.
 * @module resistances
 * @requires jquery
 * @requires character
 * @requires tables
 * @requires martial_knowledge
 * @see module:character#resistance
 * @see module:character#resistance_modifiers
 */
define(['jquery', 'character', 'tables', 'martial_knowledge'],
function ($, Character, tables) {

    /**
     * Get one of the character's Resistance values.
     * @method module:character#resistance
     * @param {String} name PhR, MR, PsR, VR, or DR
     * @returns {Number}
     */
    Character.prototype.resistance = function (name) {
        var gender,
            myAdvantages = this.Advantages,
            myDisadvantages = this.Disadvantages,
            points,
            total = this.presence() + this.modifier(tables.resistances[name]);
        switch (this.Race) {
        case "Duk'zarist Nephilim":
            gender = this.gender();
            if (name === 'PhR' && gender === 'Male') {
                total += 20;
            }
            else if (name === 'MR' && gender === 'Female') {
                total += 20;
            }
            else {
                total += 15;
            }
            break;
        case 'Jayan Nephilim':
            if (name === 'PhR') {
                total += 15;
            }
            else if (name === 'MR') {
                total -= 10;
            }
            break;
        case 'Sylvain Nephilim':
            if (name === 'MR' || name === 'PsR') {
                total += 10;
            }
            else if (name === 'DR') {
                total += 20;
            }
            else {
                total += 5;
            }
        }
        if (name === 'PhR' && this.has_ki_ability('Physical Dominion')) {
            total += 10;
        }
        if (name === 'MR') {
            points = myAdvantages['Exceptional Magic Resistance'];
            if (points) {
                total += points * 25;
            }
            if ('The Gift' in this.Advantages) {
                total += 10;
            }
        }
        else if (name === 'PsR' && (points = myAdvantages['Exceptional Psychic Resistance'])) {
            total += points * 25;
        }
        else if ($.inArray(name, ['DR', 'PhR', 'VR']) !== -1 &&
                 (points = myAdvantages['Exceptional Physical Resistance'])) {
            total += points * 25;
        }
        if (this.has_ki_ability('Body of Emptiness')) {
            total += 20;
        }
        if ((name === 'DR' && 'Sickly' in myDisadvantages) ||
            (name === 'MR' && 'Susceptible to Magic' in myDisadvantages) ||
            (name === 'PhR' && 'Physical Weakness' in myDisadvantages) ||
            (name === 'VR' && 'Susceptible to Poisons' in myDisadvantages)) {
            total = Math.floor(total / 2);
        }
        return total;
    };

    /**
     * Get the character's situation modifiers to his resistance checks
     * (elemental affinity, etc.)
     * @method module:character#resistance_modifiers
     * @returns {Object} An object whose keys are situation descriptions and
     *     values are bonus or penalty magnitudes.
     */
    Character.prototype.resistance_modifiers = function () {
        var element = this.Element,
            first_level_dp = this.levels[0].DP,
            attuned = first_level_dp.Attuned,
            result = {};
        if (element) {
            result[element] = 20;
            result[tables.opposite_elements[element]] = -20;
        }
        if (attuned && $.inArray(attuned, tables.elements) > -1) {
            if (attuned in result) {
                result[attuned] += 20;
            }
            else {
                result[attuned] = 20;
            }
        }
        if (this.has_ki_ability('Ki Concealment')) {
            result['supernatural detection'] = Math.floor(this.ki_concealment() / 2);
        }
        else if (this.has_ki_ability('Undetectable')) {
            if ('supernatural detection' in result) {
                result['supernatural detection'] += this.presence() * 2;
            }
            else {
                result['supernatural detection'] = this.presence() * 2;
            }
        }
        return result;
    };

});
