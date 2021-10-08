from django.db import models


# Create your models here.
class Disciplina(models.Model):
    nome = models.CharField(max_length=50)
    periodo = models.IntegerField()
    carga_horaria = models.IntegerField()

    def __str__(self):
        return self.nome


class Horario(models.Model):
    disciplina = models.ForeignKey(Disciplina, on_delete=models.CASCADE)
    dia = models.IntegerField()
    horario = models.IntegerField()

    def __str__(self):
        return self.nome