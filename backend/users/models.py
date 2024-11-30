from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    class Meta:
        db_table = 'fpusers'

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_set',
        blank=True,
    )
    company_name = models.CharField(max_length=255, default='')
    email = models.EmailField(unique=True)
    REQUIRED_FIELDS = ['email']

    def save(self, *args, **kwargs):
        if self.is_superuser:
            self.is_verified = True
        super().save(*args, **kwargs)