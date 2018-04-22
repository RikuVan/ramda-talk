const log = require('./lib/log')
const R = require('ramda')

/* Ramda has many ways to get and set values in objects, e.g.
  R.assoc
  R.assocPath
  R.dissoc
  R.dissocPath
  R.adjust
  R.update
  R.path
  R.pathOr
  R.prop
  R.propOr
  R.nth
  R.take
  R.head
  R.last
  R.evolve
  R.pick
  R.pluck
*/

// lenses provide a more generic way to handle all these operations
// A lens combines together a getter and a non-mutating setter

// Using [Ramda's lens](http://ramdajs.com/docs/#lens)
const basicLens = R.lens(
  // getter for name property on an object
  obj => obj.name,
  // setter for name property
  (val, obj) => Object.assign({}, obj, {name: val}),
)
// a lens returns a function which can be used to 1) map over the object, changing
// that property in a clone of the object (or just mapping to the same value),
// and 2) returning that slice of the object

/* but you will actually use the following abstractions:

  CREATE LENS: R.lensPath/ R.lensProp/ R.lensIndex
  
  USE LENS: R.view / R.set/ R.over

*/

const data = {
  name: 'The Band',
  otherNames: ['The Hawks'],
  from: null,
  members: {
    originals: [
      {
        name: 'Rick Danko',
        plays: ['bass', 'vocals', 'doublebass', 'fiddle', 'trombone'],
      },
      {
        name: 'Levon Helm',
        plays: ['drums', 'vocals', 'mandolin', 'guitar', 'percussion'],
      },
      {
        name: 'Richard Manuel',
        plays: null,
      },
      {
        name: 'Robbie Robertson',
        plays: ['guitars', 'vocals'],
      },
      {
        name: 'Levon Helm',
        plays: ['drums', 'vocals'],
      },
    ],
    additions: [
      {
        name: 'Garth',
        plays: ['keyboards', 'saxophone', 'accordion', 'woodwinds', 'brass'],
      },
      {
        name: 'Jim Weider',
        plays: ['guitars', 'bells and chimes'],
      },
      {
        name: 'Stan Szelest',
        plays: ['keyboards'],
      },
      {
        name: 'Randy Ciarlante',
        plays: ['drums', 'custom percussion', 'vocals'],
      },
      {
        name: 'Richard Bell',
        plays: ['keyboards'],
      },
    ],
    collaborators: [],
  },
}

/* =========  TASK 1: GET  ========= */
// get Danko's first instrument
// see: https://goo.gl/WktouA

const dankosFirstLens = R.identity
const dankosFirst = R.identity
// log('GET', dankosFirst)

/* =========  TASK 2: SET  ========= */
// change Danko's first instrument
// see: https://goo.gl/WktouA

const dankoOnDrums = R.identity
// log('SET', dankoOnDrums)

/* =========  TASK 3: TRANSFORM   ========= */
// hyphenate two-word instruments

const hyphenatedInstruments = R.identity
// log('TRANSFORMS', hyphenatedInstrument)
// see: https://goo.gl/3VeyBa

/* =========  TASK 4: REMOVE PROPERTY   ========= */
// remove collaborators
// https://goo.gl/xgb85b

const sansCollabs = R.identity
// log('OMIT', sansCollabs)

/*  =========   TASK 5: INSERT TO LIST  ========= */
// insert a new name to collaborators list
// see: https://goo.gl/aYHL8y

const updatedCollaborators = R.identity
//log('INSERT', updatedCollaborators)

/*  =========   TASK 6: INSERT NEW OBJ  =========  */
// insert a new property: hangers-on
// see: https://goo.gl/XAEPvy

const withHangersOn = R.identity
// log('INSERT OBJ', hangersOn)

/*  =========   TASK 7: COMPOSE  =========   */
// compose 5 & 6

const transformations = []

const withTransforms = R.identity
// log('composed', withTransforms)

/*  =========   TASK 8: CREATE DEFAULTS HELPER  ========= */
// helper which replaces all nulls and undefineds with a default value
// see: https://goo.gl/G1BZ38

const _getPaths = (obj, lastPath = [], paths = []) => {
  return paths
}

const replaceAllNils = fallbackValue => obj => {
  const paths = _getPaths(obj)
  return '<OBJECT WITH DEFAULTS>'
}

const fooReplacer = replaceAllNils('FOO')
// log('REPLACER', fooReplacer(data))

/*  =========   TASK 9: CREATE GENERIC UPDATER   ========= */
// like assocPath only allowing use of string path 'a.b.2'
// how can you keep it from blowing up if it gets bad path?
// see: https://goo.gl/QezGF7

const setIn = R.curry((path, val, obj) => 'updated obj or array')

// const update = setIn('members.originals.0.name', 'Richard', data)
// log('updateIn', update)
