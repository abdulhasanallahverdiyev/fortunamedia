

class Uploader:

    @staticmethod
    def collaborators_logo(instance, filename):
        return f"Collaborators_LOGO/{instance.name}/{filename}"

    @staticmethod
    def services_image(instance, filename):
        return f"Services_Image/{instance.name}/Logo/{filename}"

    @staticmethod
    def services_last_work_image(instance, filename):
        return f"Services_Image/{instance.service.name}/Works/{filename}"
