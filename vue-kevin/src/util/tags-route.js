
export function routeHasTags(route) {
  return route.path.indexOf('tagged') >= 0;
}

export function tagsFromString(str = '') {
  return str.split(',').filter(t => t.length > 0);
}

export function tagsFromRoute(route) {
  if (!routeHasTags(route)) {
    return [];
  }

  const components = route.path.split('/');
  return tagsFromString(components[components.length - 1]);
}

export default {
  routeHasTags,
  tagsFromRoute,
};
