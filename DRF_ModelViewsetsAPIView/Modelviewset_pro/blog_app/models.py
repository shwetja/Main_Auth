from django.db import models

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=20)
    content = models.TextField()
    created_by = models.CharField(max_length=20)

