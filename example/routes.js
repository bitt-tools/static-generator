export default [
  {
    regex: /^$/,
    path: 'home/asfad/asdfasdf',
    component () {
      return ['div', {
        class: 'test',
      }, [
        'hello world!',
        () => ['h1', 'asdfasdf'],
        2312312,
        ({ newState }) => {
          const state = newState({
            x: 'asdfasa2da2da2da2ddf'
          })

          return ['code', state.x]
        }
      ]]
    },
  },
]
