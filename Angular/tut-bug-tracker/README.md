#commit 1.1
forRoot can be configued to work with
      { path: '', component: BugListComponent }
but only one forRoot should be defined

forChild can be used
      { path: 'bugs', component: BugListComponent }
then localhost:9000/bugs will work
