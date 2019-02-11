from django.urls import path
from frontend import views

handler404 = 'frontend.views.view_404'

urlpatterns = [
    path('', views.index)
]
