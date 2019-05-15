import api from '../apiTwo.json';

import { normalize, schema } from 'normalizr';

//primer parametro como le voy a poner de key a mis datos normalizados puede ser nombre que sea
//segundo dato definicion de schema,
//tercer parametro las opciones como por ejemplo que tu api no tenga el key de id, este renombre tu idLoquesea
// a id
const media = new schema.Entity('media', {}, {
  idAttribute: 'id',
  processStrategy: (value, parent, key) => ({
    ...value,
    category: parent.id
  })
})

const category = new schema.Entity('categories', {
  playlist: new schema.Array(media)
})

const categories = { categories: new schema.Array(category) }

const normalizedData = normalize(api, categories);

export default normalizedData;