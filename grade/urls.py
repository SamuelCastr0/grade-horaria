from django.urls import path

from . import views
from . import apis

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('list-disciplinas-api/', apis.ListDisciplinaAPI.as_view(), name='list-disciplinas-api'),
    path('detail-disciplina-api/<int:pk>/', apis.DetailDisciplinaAPI.as_view(), name='detail-disciplina-api'),
    path('create-disciplina-api/', apis.CreateDisciplinaAPI.as_view(), name='list-disciplina-api'),
    path('update-disciplina-api/<int:pk>/', apis.UpdateDisciplinaAPI.as_view(), name='update-disciplina-api'),
    path('delete-disciplina-api/<int:pk>/', apis.DeleteDisciplinaAPI.as_view(), name='delete-disciplina-api'),
]