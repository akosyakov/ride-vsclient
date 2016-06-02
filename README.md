Setup:
1. Clone the repository;
2. go to the repository's folder;
3. run 'npm install' to download dependencies;
4. create lib/ride-languageserver.jar symlink that points to the executable RIDE rlang jar;
    mkdir lib
    cd lib
    ln -s $RIDE_RLANG_JAR_PATH ride-languageserver.jar
    cd ..
5. run 'code .' to start vscode;
6. press F5 to run the extension. 

