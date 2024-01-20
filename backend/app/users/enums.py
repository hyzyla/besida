from enum import Enum, unique


@unique
class OAuthProvider(Enum):
    google = "google"
