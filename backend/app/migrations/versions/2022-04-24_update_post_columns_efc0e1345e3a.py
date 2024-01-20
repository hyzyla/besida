"""Update post columns

Revision ID: efc0e1345e3a
Revises: b5d4dd3d478a
Create Date: 2022-04-24 15:42:22.263490

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "efc0e1345e3a"
down_revision = "b5d4dd3d478a"
branch_labels = None
depends_on = None


def upgrade():
    op.execute(
        """
        ALTER TABLE posts
            RENAME COLUMN comment_count TO comments_count;
    """
    )


def downgrade():
    op.execute(
        """
        ALTER TABLE posts
            RENAME COLUMN comments_count TO comment_count;
    """
    )
