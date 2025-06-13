/* Display online status for a list of users.
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
*/

let shown=2; //! Número de nombres de usuario a mostrar

const users=['mockIng99', 'J0eyPunch', 'glassedFer','Fabry','Mariana','Carlos','Alberto','Patito']; //! Array de usuarios
const summarized=(users.length)-shown;

function onlineStatus(shown){
    const shownUsers=[];
    for (let i= 1; i<=shown; i++) {
        shownUsers.push(users[i-1]);
    }
    return shownUsers
}
console.log(`The users ${onlineStatus(shown)} and ${summarized} more online`)