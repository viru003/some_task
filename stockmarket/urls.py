from os import name
from django.urls import path,include
from .views import *

urlpatterns = [
    path("",login, name="login"),
    path('dashboard/',dashboard, name="dashboard"),
    path('signup',signup, name="signup"),
    path('logoutview',logoutview,name='logoutview'),
    path('individual<slug:slug>',individual,name='individual'),
    path('results',results,name="results"),

]