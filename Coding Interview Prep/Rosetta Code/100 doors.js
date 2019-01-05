/**
 * Determine 'open' door state for recursive toggling.
 *
 * @param numDoors the total number of doors.
 *
 * @brief The implementation uses a brute-force approach
 *        to toggle door state by checking the multiple
 *        remainder for each door.
 *
 *        An idea for improving efficiency would be
 *        reducing the total count to final state on a
 *        single iteration over the doors.
 */
function getFinalOpenedDoors (numDoors)
{
  var doors = initDoors(numDoors);
  for (var i = 1; i <= numDoors; ++i)
  {
    doors = toggleDoorsByMultiple(doors, i, numDoors);
  }
  return generateOpenDoorsArray(doors, numDoors);
}

function initDoors(numberOfDoors)
{
  var doors = {};
  for (var i = 1; i <= numberOfDoors; ++i)
  {
    doors[i] = false;
  }
  return doors;
}

function toggleDoorsByMultiple(doors, multiple, numberOfDoors)
{
  for (var i = 1; i <= numberOfDoors; ++i)
  {
    if ((i % multiple) == 0)
    {
      doors[i] = !doors[i];
    }
  }
  return doors;
}

function generateOpenDoorsArray(doors, numberOfDoors)
{
  var res = [];
  for (var i = 1; i <= numberOfDoors; ++i)
  {
    if (doors[i])
    {
      res.push(i);
    }
  }
  return res;
}
