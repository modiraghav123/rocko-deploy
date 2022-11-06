from django.urls import include, path
from . import views
app_name='base'
urlpatterns = [
    path('',views.index,name='index'),
    path('form/', views.basic_form, name='form'),

]