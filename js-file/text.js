console.log('hello');

const getFileStream = async (url) => {
    // implementation
  };
  
  (async () => {
    const stream = await getFileStream("https://domain.name/path/file.ext");
    for await (const chunk of stream) {
      console.log({ chunk });
    }
  })();
  
  