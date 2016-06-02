#### Setup
- Clone the repository;
- go to the repository's folder;
- run 'npm install' to download dependencies;
- create lib/ride-languageserver.jar symlink that points to the executable RIDE rlang jar;
```
    mkdir lib
    cd lib
    ln -s $RIDE_RLANG_JAR_PATH ride-languageserver.jar
    cd ..
```
- run 'code .' to start vscode;
- press F5 to run the extension. 


