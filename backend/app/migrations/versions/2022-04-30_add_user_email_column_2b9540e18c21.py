"""Add user.email column

Revision ID: 2b9540e18c21
Revises: f832712494fe
Create Date: 2022-04-30 22:01:40.424605

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2b9540e18c21'
down_revision = 'f832712494fe'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('users', sa.Column('email', sa.Text(), nullable=False))


def downgrade():
    op.drop_column('users', 'email')
