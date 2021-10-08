from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Disciplina
from .serializers import DisciplinaSerializer
from rest_framework.permissions import AllowAny


class ListDisciplinaAPI(APIView):
    def get(self, request):
        disciplinas = Disciplina.objects.all().order_by('nome')
        serializer = DisciplinaSerializer(disciplinas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class DetailDisciplinaAPI(APIView):
    def get(self, request, pk):
        disciplina = Disciplina.objects.get(pk=pk)
        serializer = DisciplinaSerializer(disciplina, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CreateDisciplinaAPI(APIView):
    def post(self, request):
        serializer = DisciplinaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

        return Response(status=status.HTTP_200_OK)


class UpdateDisciplinaAPI(APIView):
    def put(self, request, pk):
        disciplina = Disciplina.objects.get(pk=pk)
        serializer = DisciplinaSerializer(instance=disciplina, data=request.data)
        if serializer.is_valid():
            serializer.save()

        return Response(status=status.HTTP_200_OK)


class DeleteDisciplinaAPI(APIView):
    def delete(self, request, pk):
        disciplina = Disciplina.objects.get(pk=pk)
        disciplina.delete()
        return Response(status=status.HTTP_200_OK)
