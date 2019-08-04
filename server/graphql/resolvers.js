// The root provides a resolver function for each API endpoint
var resolverRoot = {
  hello: () => {
    return 'Hello world!';
  },
};

exports.resolverRoot = resolverRoot;