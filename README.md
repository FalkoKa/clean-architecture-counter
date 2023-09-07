## Clean Architecture React Counter App

This is a very simple react counter app. However, for the purpose of practicing for my software engineer job, this app is built on the Clean Architecture design pattern from uncle bob.

To store the counter, I first implemented basically a RAM storage with the CounterStorage adapter. In a next step, I implemented the local storage by simply adding a storage API on the outer circle, that gets injected into the counterstorage adapter through dependency inversion, a fundamental principle of SOLID design pattern and thus, clean architecture.

Additionally, I used styled components for trying that library, as well as testing with the TS Jest library.

A small, fun project to learn this impressive architectural design pattern
