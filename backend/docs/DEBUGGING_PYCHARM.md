# Debugging in Pycharm

If you would like to debug application using in Pycharm and Docker Compose:

1. Add DockerCompose as python interpreter

![1.png](debug/1.png)

use `python` service in interpreter settings

![2.png](debug/2.png)


2. Add FastAPI as new configuration

![3.png](debug/3.png)

![4.png](debug/4.png)

* in field `Application file` choose `app/main.py file`,
* for `uvicorn options` use `--host 0.0.0.0 --port 8010 --reload`
* for `interpreter` choose remote interpreter added on previous step

![5.png](debug/5.png)

3. Use button with a bug in left over for running server in debugging mode.

![6.png](debug/6.png)

