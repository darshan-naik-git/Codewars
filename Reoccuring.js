//https://www.codewars.com/kata/5a7e6bd576c0e2f27d00237a

function isReoccuring(items)
{
  let unique = [];

    for (let i = 0; i < items.length; i++) {
        if (unique.indexOf(items[i]) === -1) {
            unique.push(items[i]);
            if (unique.length <= 1) {
                continue;

            } else {
                for (let j = 0; j < unique.length - 1; j++) {
                    if (items.indexOf(unique[j], i) !== -1) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}